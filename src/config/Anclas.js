export const handleClick = (area) => {
  const element = document.getElementById(area);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
