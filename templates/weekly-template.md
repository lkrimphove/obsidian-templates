[[<% tp.date.now("YYYY-MM", 0, tp.file.title, "gggg-[W]ww") %>|Previous weekly note]] || [[<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>|Monthly <% tp.date.now("MM", 0, tp.file.title, "YYYY-MM-DD") %>]] 
# <% tp.date.now("gggg-[W]ww") %>
[[_TOC_]]

# Tasks
## Overdue
```tasks
not done
	due before <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "gggg-[W]ww") %>
exclude sub-items

group by heading

hide backlink
short mode
```

## Due this week
```tasks
due after <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "gggg-[W]ww") %>
due before <% tp.date.weekday("YYYY-MM-DD", 7, tp.file.title, "gggg-[W]ww") %>
exclude sub-items

group by heading

hide backlink
short mode
```

## Monday
[[<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "gggg-[W]ww") %>]]
```tasks
filename includes <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "gggg-[W]ww") %>
exclude sub-items

group by heading
sort by status

short mode
hide backlink
```

## Tuesday
[[<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "gggg-[W]ww") %>]]
```tasks
filename includes <% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "gggg-[W]ww") %>
exclude sub-items

group by heading
sort by status

short mode
hide backlink
```

## Wednesday
[[<% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "gggg-[W]ww") %>]]
```tasks
filename includes <% tp.date.weekday("YYYY-MM-DD", 2, tp.file.title, "gggg-[W]ww") %>
exclude sub-items

group by heading
sort by status

short mode
hide backlink
```

## Thursday
[[<% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "gggg-[W]ww") %>]]
```tasks
filename includes <% tp.date.weekday("YYYY-MM-DD", 3, tp.file.title, "gggg-[W]ww") %>
exclude sub-items

group by heading
sort by status

short mode
hide backlink
```

## Friday
[[<% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "gggg-[W]ww") %>]]
```tasks
filename includes <% tp.date.weekday("YYYY-MM-DD", 4, tp.file.title, "gggg-[W]ww") %>
exclude sub-items

group by heading
sort by status

short mode
hide backlink
```

## Saturday
[[<% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "gggg-[W]ww") %>]]
```tasks
filename includes <% tp.date.weekday("YYYY-MM-DD", 5, tp.file.title, "gggg-[W]ww") %>
exclude sub-items

group by heading
sort by status

short mode
hide backlink
```

## Sunday
[[<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "gggg-[W]ww") %>]]
```tasks
filename includes <% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "gggg-[W]ww") %>
exclude sub-items

group by heading
sort by status

short mode
hide backlink
```

# Tags
#weekly