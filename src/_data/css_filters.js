module.exports = function () {
  const brightness = [
    1 * 25,
    2 * 25,
    3 * 25,
    4 * 25,
    5 * 25,
    6 * 25,
    7 * 25,
    8 * 25,
    9 * 25,
    10 * 25,
  ].map((v) => `brightness(${v}%)`);

  const hueRotations = [
    "hue-rotate(0deg)",
    "hue-rotate(-0.1turn)",
    "hue-rotate(-0.2turn)",
    "hue-rotate(-0.3turn)",
    "hue-rotate(-0.4turn)",
    "hue-rotate(-0.5turn)",
    "hue-rotate(-0.6turn)",
    "hue-rotate(-0.7turn)",
    "hue-rotate(-0.8turn)",
    "hue-rotate(-0.9turn)",
  ];

  const saturations = [
    "saturate(0%)",
    "saturate(50%)",
    "saturate(100%)",
    "saturate(150%)",
    "saturate(200%)",
    "saturate(250%)",
    "saturate(300%)",
    "saturate(350%)",
  ];

  const contrasts = [
    "contrast(50%)",
    "contrast(100%)",
    "contrast(150%)",
    "contrast(200%)",
    "contrast(250%)",
  ];

  const invert = ["invert(0)", "invert(50%)", "invert(100%)"];

  const myFilters = invert.concat(
    hueRotations
      .map((hue) =>
        saturations.map((sat) => `sepia(100%) contrast(200%) ${hue} ${sat}`)
      )
      .reduce((p, c) => p.concat(c), [])
  );
  console.log(
    `myFilters
  :`,
    myFilters
  );
  return myFilters;
  // .concat(hueRotations.map(toFilterStr))
  // .concat(saturations.map(toFilterStr))
  // .concat(brightness.map(toFilterStr))
  // .map(toStyleStr)
  // .concat(
  //   hueRotations
  //     .map((hue) => saturations.map((sat) => `filter: ${hue} ${sat}`))
  //     .reduce((p, c) => p.concat(c), ["hue-rotate saturate"])
  // )
  // .concat(
  //   contrasts
  //     .map((con) => saturations.map((sat) => `filter: ${con} ${sat}`))
  //     .reduce((p, c) => p.concat(c), ["contrast saturate"])
  // )
  // .concat(
  //   hueRotations
  //     .map((hue) =>
  //       saturations.map((val) => `filter: sepia(100%) ${hue} ${val}`)
  //     )
  //     .reduce((p, c) => p.concat(c), ["sepia hue-rotate saturate"])
  // )
  // .concat(
  //   hueRotations
  //     .map((hue) =>
  //       contrasts
  //         .map((con) =>
  //           saturations.map(
  //             (sat) => `filter: sepia(100%) ${hue} ${sat} ${con}`
  //           )
  //         )
  //         .reduce((p, c) => p.concat(c), [])
  //     )
  //     .reduce((p, c) => p.concat(c), ["sepia hue-rotate saturate contrast"])
  // )
};
