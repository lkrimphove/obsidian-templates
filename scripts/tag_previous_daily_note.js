function tag_previous_daily_note(filename, path) {

  files = app.vault.getMarkdownFiles().filter(file => file.path.includes(path)).filter(file => !file.path.includes(filename));

  now = Date.parse(filename);

  files = files.map(file => {
    file.parsed_time = Date.parse(file.basename);
    return file;
  });

  files = files.filter((item) => {
    return item.parsed_time < now;
  });
  files = files.sort((a, b) => a.parsed_time < b.parsed_time);
  
  return files[0].basename;
}

module.exports = tag_previous_daily_note;
