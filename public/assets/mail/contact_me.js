$(function () {
    $("#contactForm input,#contactForm textarea,#contactForm button")
    .jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var mobile = $("input#movil").val();          
            var identification = $("input#identificationCreate").val();          
            var plan = $("select#plan").val();
            var price = 0
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(" ") >= 0) {
                firstName = name.split(" ").slice(0, -1).join(" ");
            }

            switch (plan) {
                case 'LITE':
                    price = 55000
                    break;
                case 'PLUS':
                        price = 65000
                        break;
                case 'PREMIUM':
                    price = 85000
                    break;            
                default:
                    break;
            }
            $this = $("#sendMessageButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            $.ajax({
                url: "/api/user",
                type: "POST",
                data: {
                    name: name,
                    identification: identification,
                    mobile: mobile,
                    phone: phone,
                    email: email,
                    typePlan: plan,
                    value: price
                },
                cache: false,
                success: function () {
                    // Success message
                    $("#success").html("<div class='alert alert-success'>");
                    $("#success > .alert-success")
                        .html(
                            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                        )
                        .append("</button>");
                    $("#success > .alert-success").append(
                        "<strong>Tu inscripción a sido satisfatoria. La compra fue del plan "+plan+" por un costo de $"+ price +" al mes.</strong>"
                    );
                    $("#success > .alert-success").append("</div>");
                    //clear all fields
                    $("#contactForm").trigger("reset");
                },
                error: function () {
                    // Fail message
                    $("#success").html("<div class='alert alert-danger'>");
                    $("#success > .alert-danger")
                        .html(
                            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                        )
                        .append("</button>");
                    $("#success > .alert-danger").append(
                        $("<strong>").text(
                            "Lo siento" +
                                firstName +
                                ", parece que mi servidor no responde. ¡Por favor, inténtelo de nuevo más tarde! "
                        )
                    );
                    $("#success > .alert-danger").append("</div>");
                    //clear all fields
                    $("#contactForm").trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                },
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $('a[data-toggle="tab"]').click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });

    $("#planForm input,#planForm textarea,#planForm button")
    .jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            var identification = $("input#identification").val();            
            console.log(identification)
            $this = $("#sendMessagePlanButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            $.ajax({
                url: `/api/user/${identification}`,
                type: "GET",
                cache: false,
                success: function (data, error) {
                    let html = ``
                    // Success message
                    if (!data.name) {
                        html += `<div class="container">
                                    <h3 class="text-uppercase">Usuario no encontrado!</h3>
                                    <br>
                                    <img src="https://lh3.googleusercontent.com/KnAhFB7f8i88GvV9jZbGPMDEKSm8a_Ewz1YGsa7FVhM5ocHarcVq7nAZgpufUmzWmViqU76CbWvP13sh-oLWcjCCfCbvUAO7LOYfoYmtgvC9zST-myYY9AfqePPTMNR_8LVL67T1eT_S923Oi5YrkrtMGkPipUXxqDtdc0Jf9TaC7AI0sQjwaqCKh0YMaQ1Yo9_VgEiwSHB60N1qxfAYXj9g3RrMedThuDOLEh9lJgmvI_VzxRSh7ZEh6hoIeRsHSI55CUE8Buyv1G399y2e_B97LSgJh7d-GU4RJqlrfuRuAWL2x0p_PG52Z83niCdOV41o-z8Kai6z5Il1z8cXnGUvlaFj0P_cfxdvyRIGSpYjTI6LSU2UtCxD-kNgBah7CJVSCpR6AgMHHyQQ5gQYtodvn4C_9GrYKzs1rJn66wNeUfCLJ33aqXWZdW_gILJMXK60rJ_65aCIWHvsAieTqqitZURwH0mXEYqoowrddbKj62pKuB_vOgfkcQWgVuU2jqwEWcg41KZbmfdmAasYTvvRbzSpsG44myVsg-DrVLp7Wrgl2Uii47B-v3aPFYy1_y_2bVthygSryH8xGnPXgsaLFaNWywmZN1hNCavugel_-eyrQn7Elrau1U9ZoZECxL8w7ikuD6fzZf_EWfkFn29ZyLOuRfT8L0bqVrSeInzy6TkNOLV0je8pPyVcgeVJoL0_rQsFZE-Nt_CYutuW1Q4F=w301-h248-no">                                       
                                </div>`
                    } else {
                        html = `
                        <div class="container">
                            <h3 class="text-uppercase">Mi Plan</h3>
                            <br>
                            <div class="row">
                                <div class="col-md-6 img">
                                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"  alt="" class="img-rounded">
                                </div>
                                <div class="col-md-6 details">
                                <blockquote>
                                    <h5>${data.name}</h5>
                                    <h6><strong>Identificación</strong>: ${data.identification}</h6>
                                </blockquote>
                                <p>
                                    Email: ${data.email} <br>
                                    Teléfono: ${data.mobile} <br>
                                    Tipo de plan: ${data.typePlan} <br>
                                    Valor: $${data.value}
                                </p>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">`
                        
                        switch (data.typePlan) {
                            case 'LITE':
                                html += `<div class="card col-md-12" style="width: 18rem;">
                                            <div class="card-body">
                                                <h5 class="card-title">Lite</h5>
                                                <p class="card-text">Incluye el uso ilimitado de los espacios
                                                    básicos</p>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Bicicletas</li>
                                                <li class="list-group-item">Caminadoras</li>
                                                <li class="list-group-item">Pesas</li>
                                            </ul>
                                        </div>`
                                break;
                            case 'PLUS':
                                html += `<div class="card col-md-12" style="width: 18rem;">
                                            <div class="card-body">
                                                <h5 class="card-title">Plus</h5>
                                                <p class="card-text">Incluye el uso ilimitado de los espacios básicos</p>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Bicicletas</li>
                                                <li class="list-group-item">Caminadoras</li>
                                                <li class="list-group-item">Pesas</li>
                                                <li class="list-group-item">Sesión de sauna</li>
                                            </ul>
                                        </div>`
                                    break;
                            case 'PREMIUM':
                                html += `<div class="card col-md-12" style="width: 18rem;">
                                            <div class="card-body">
                                                <h5 class="card-title">Premium</h5>
                                                <p class="card-text">ncluye el uso ilimitado de los espacios
                                                    básicos</p>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Bicicletas</li>
                                                <li class="list-group-item">Caminadoras</li>
                                                <li class="list-group-item">Pesas</li>
                                                <li class="list-group-item">Sesión de sauna</li>
                                                <li class="list-group-item">Clases de natación</li>
                                            </ul>
                                        </div>`
                                break;            
                            default:
                                break;
                        }

                        html += `</div></div>`
                    }

                    $("#modalPlan").html(html);
                        // $("#modalPlan > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
                        // $("#modalPlan > .alert-success").append("<strong>Tu inscripción a sido satisfatoria. La compra fue del plan por un costo de al mes.</strong>");
                    // $("#modalPlan > .alert-success").append("</div>");
                    //clear all fields
                    $("#planForm").trigger("reset");
                },
                error: function () {
                    // Fail message
                    $("#success").html("<div class='alert alert-danger'>");
                    $("#success > .alert-danger")
                        .html(
                            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                        )
                        .append("</button>");
                    $("#success > .alert-danger").append(
                        $("<strong>").text(
                            "Lo siento" +
                            firstName +
                            ", parece que mi servidor no responde. ¡Por favor, inténtelo de nuevo más tarde! "
                        )
                    );
                    $("#success > .alert-danger").append("</div>");
                    //clear all fields
                    $("#planForm").trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                },
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $('a[data-toggle="tab"]').click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});



/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
    $("#success").html("");
});
