/* HERO 滑鼠暴衝 */
const hero = document.querySelector(".hero");

if (hero) {
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const power = Math.min(Math.sqrt(x*x + y*y) * 2, 1);
    hero.style.filter = `brightness(${1 + power * 0.6})`;
  });

  hero.addEventListener("mouseleave", () => {
    hero.style.filter = "";
  });
}
