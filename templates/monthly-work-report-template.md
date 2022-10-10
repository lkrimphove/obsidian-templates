# Work
- [ ] add hours and confirm time report 📅 <% tp.date.now("YYYY-MM-DD", "P1M", tp.file.title, "YYYY-MM" + "-01") %>
- [ ] add receipts and confirm expences 📅 <% tp.date.now("YYYY-MM-DD", "P1M", tp.file.title, "YYYY-MM" + "-01") %>

# Report
```tasks
heading includes work
done after <% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM") %>
done before <% tp.date.now("YYYY-MM-DD", "P1M", tp.file.title, "YYYY-MM" + "-01") %>

group by filename
sort by description

short mode
hide backlink 
```