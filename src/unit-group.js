const unitGrpGetter = (() => {
  const getUnit = () => document.querySelector(".selected-unit").id;

  return { getUnit };
})();

export default unitGrpGetter;
