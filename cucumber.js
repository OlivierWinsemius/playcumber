const feature = [
  "--require-module ts-node/register",
  "--require features/**/*.ts",
  "--require cucumber/**/*.ts",
  "--publish-quiet",
  "--tags 'not @ignore'",
];

const reporting = [
  ...feature,
  `--format-options '{"snippetInterface": "async-await"}'`,
  "--format html:output/report.html",
  "--format json:output/report.json",
  "--format message:output/report.ndjson",
  "--format progress-bar",
];

module.exports = {
  default: feature.join(" "),
  reporting: reporting.join(" "),
};
