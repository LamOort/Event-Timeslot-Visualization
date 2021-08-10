export const findByTestAttribute = (component, att) => {
    const wrapper = component.find(`[data-test='${att}']`);
    return wrapper;
}