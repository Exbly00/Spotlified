const displaySection = (id) => {
  document.querySelector("section.active")?.classList.remove("active");

  document.querySelector(`${id}-section`)?.classList.add("active");
};

export { displaySection };
