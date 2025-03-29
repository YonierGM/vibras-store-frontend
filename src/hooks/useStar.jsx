export function getStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return [
    ...Array(fullStars).fill("full"),
    ...Array(halfStar).fill("half"),
    ...Array(emptyStars).fill("empty"),
  ];
}
