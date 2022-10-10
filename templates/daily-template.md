[[<% tp.user.tag_previous_daily_note(tp.file.title,"periodic-notes/daily-notes") %>|Previous Daily Note]] || [[<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>|Monthly <% tp.date.now("MM", 0, tp.file.title, "YYYY-MM-DD") %>]] || [[<% tp.date.now("gggg-[W]ww", 0, tp.file.title, "YYYY-MM-DD") %>|Weekly <% tp.date.now("ww", 0, tp.file.title, "YYYY-MM-DD") %>]]
# <% tp.file.title %>
[[_TOC_]]

# Tasks
## Daily Migration
```tasks
not done
path includes daily-notes/<% tp.user.tag_previous_daily_note(tp.file.title,"periodic-notes/daily-notes") %>
exclude sub-items

group by heading

short mode
hide backlink
```

## Personal
- [ ]

## University
- [ ]

## Work
- [ ]

## GSK
- [ ]

# Timeline
```tasks
scheduled on # <% tp.file.title %>

sort by description

hide backlink
short mode
```

# Lessons learned


# Tags
#daily #personal #university #work #gsk