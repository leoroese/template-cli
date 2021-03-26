if (stats.isFile()) {
  const contents = fs.readFileSync(origFilePath, 'utf8');

  // Rename
  if (file === '.npmignore') file = '.gitignore';

  const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
  fs.writeFileSync(writePath, contents, 'utf8');
}
