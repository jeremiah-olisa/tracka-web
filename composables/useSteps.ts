export const useSteps = (limit: number = 3) => {
  const completedSteps = ref<number[]>([]);

  const currentStep = computed(() => completedSteps.value.sort((a, b) => a - b).pop());

  function toggleStep(step: number) {
    if (step > 0 && step <= limit)
      hasCompletedStep(step)
        ? (completedSteps.value = completedSteps.value.filter((c) => c != step))
        : completedSteps.value.push(step);
  }

  const setStep = (step: number) => {
    if (step > 0 && step <= limit && !completedSteps.value.includes(step))
      toggleStep(step);
  };

  const nextStep = () => {
    if (currentStep.value && currentStep.value < limit)
      completedSteps.value.push(currentStep.value + 1);
  };

  const prevStep = () => {
    if (currentStep.value && currentStep.value > 1)
      completedSteps.value.push(currentStep.value - 1);
  };

  const hasCompletedStep = (step: number) => {
    return completedSteps.value.includes(step);
  };

  const hasCompletedSteps = computed(() => {
    // Check if each step from 1 to limit exists in completedSteps
    for (let step = 1; step <= limit; step++) {
      if (!completedSteps.value.includes(step)) {
        // If any step is missing, return false
        return false;
      }
    }
    // If all steps are completed, return true
    return true;
  });

  return {
    completedSteps,
    currentStep,
    toggleStep,
    nextStep,
    prevStep,
    setStep,
    hasCompletedStep,
    hasCompletedSteps,
  };
};
