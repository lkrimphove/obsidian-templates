---
type: "project"
name: ""
handle: ""
owner: ""
active: true
---

# Task-Notes
```dataviewjs
let current = dv.current();
let path = current.file.path.replace("/" + current.file.name + ".md", "")

function getTicketLink(ticket) {
	if (ticket.url !== null) {
		return "[" + ticket.id + " (" +  ticket.location + ")](" + ticket.url + ")";
	}
	else {
		return ticket.id;
	}
};

dv.table(["File", "Name", "Ticket", "Done"], dv.pages('"' + path + '"')
    .where(p => p.type=="task")
    .map(p => [p.file.link, p.name, getTicketLink(p.ticket), p.done]));
```

# Meeting-Notes
```dataviewjs
let current = dv.current();
let path = current.file.path.replace("/" + current.file.name + ".md", "")

dv.table(["File", "Topic", "Date"], dv.pages('"' + path + '"')
    .where(p => p.type=="meeting")
    .map(p => [p.file.link, p.topic, p.date]));
```

# Related repositories
- 

# Useful resources
- 