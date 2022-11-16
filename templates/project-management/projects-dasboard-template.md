# Active projects
```dataviewjs
let current = dv.current()
let path = current.file.path.replace("/" + current.file.name + ".md", "")

dv.table(["File", "Name", "Owner"], dv.pages('"' + path + '"')
    .where(p => p.type=="project")
    .where(p => p.active)
    .map(p => [p.file.link, p.name, p.owner]))
```

# Completed projects
```dataviewjs
let current = dv.current()
let path = current.file.path.replace("/" + current.file.name + ".md", "")

dv.table(["File", "Name", "Owner"], dv.pages('"' + path + '"')
    .where(p => p.type=="project")
    .where(p => !p.active)
    .map(p => [p.file.link, p.name, p.owner]))
```
