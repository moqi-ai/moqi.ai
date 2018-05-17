function show(id) {
    switch (id) {
        case ("algorithm_engineer"):
            $("#job_name").html("算法工程师");

            $("#li_algorithm_engineer").addClass("text-primary");
            $("#li_backend_senior_engineer").removeClass("text-primary");
            $("#li_full_stack_developer").removeClass("text-primary");

            $("#algorithm_engineer").show();
            $("#backend_senior_engineer").hide();
            $("#full_stack_developer").hide();

            break;
        case ("backend_senior_engineer"):
            $("#job_name").html("后端系统工程师");
            $("#li_algorithm_engineer").removeClass("text-primary");
            $("#li_backend_senior_engineer").addClass("text-primary");
            $("#li_full_stack_developer").removeClass("text-primary");

            $("#algorithm_engineer").hide();
            $("#backend_senior_engineer").show();
            $("#full_stack_developer").hide();
            break;
        case ("full_stack_developer"):
            $("#job_name").html("前端全栈工程师");
            $("#li_algorithm_engineer").removeClass("text-primary");
            $("#li_backend_senior_engineer").removeClass("text-primary");
            $("#li_full_stack_developer").addClass("text-primary");

            $("#algorithm_engineer").hide();
            $("#backend_senior_engineer").hide();
            $("#full_stack_developer").show();
            break;
        default:
            $("#job_name").html("");
            $("#algorithm_engineer").hide();
            $("#backend_senior_engineer").hide();
            $("#full_stack_developer").hide();
            break;
    }
}

$(document).ready(function () {
    show("algorithm_engineer");
})