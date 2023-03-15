function selectPlan(planNumber) {
    const planElement = document.querySelector(`#plan-${planNumber}`);
    planElement.classList.add('plan--selected');
}


function selectPlan(planNumber) {
    const allPlans = document.querySelectorAll('.plan');
    allPlans.forEach(plan => {
        plan.classList.remove('plan--selected');
    });
    const selectedPlan = document.querySelector(`#plan-${planNumber}`);
    selectedPlan.classList.add('plan--selected');
}