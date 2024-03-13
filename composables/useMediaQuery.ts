type BreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BreakValue = number | undefined;
type BreakPointValue = Record<BreakPoints, BreakValue>;

export const useMediaQuery = (breakPointValue: BreakPointValue) => {
  const breakpoint = ref<BreakPoints>('sm');
  const breakValue = ref<BreakValue>();

  const setBreakpoint = () => {
    const width = window.innerWidth;
    if (width < 576) {
      breakpoint.value = 'xs';
    } else if (width < 768) {
      breakpoint.value = 'sm';
    } else if (width < 992) {
      breakpoint.value = 'md';
    } else if (width < 1200) {
      breakpoint.value = 'lg';
    } else {
      breakpoint.value = 'xl';
    }
    breakValue.value = breakPointValue[breakpoint.value];
  };

  onMounted(() => {
    setBreakpoint();
    window.addEventListener('resize', setBreakpoint);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', setBreakpoint);
  });

  return { breakpoint, breakValue };
}
