# Templates
A repository containing templates and scripts for [Obsidian](https://obsidian.md/)

## Plugins
### Required
- [Templater](https://github.com/SilentVoid13/Templater)
- [Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)

### Recommended
- [Periodic Notes](https://presearch.com/search?q=obsidian%20periodic%20notes)
- [Calendar](https://github.com/liamcain/obsidian-calendar-plugin)
- [Dynamic Table of Contents](https://github.com/aidurber/obsidian-plugin-dynamic-toc)
- [Remotely Save](https://github.com/remotely-save/remotely-save)
- [Web](https://github.com/coddingtonbear/obsidian-web)

## Setup
### Vault structure
My fault looks something like this, so yours should probably look similar:

```
your vault
├── assets (this repository)
│   ├── attachments (not in this repo)
│   ├── scripts
│   │   ├── ...
│   │   └── ...
│   ├── templates
│   │   ├── daily-template.md
│   │   ├── monthly-template.md
│   │   └── ...
│   └── README.md
├── periodic-notes
│   ├── daily-notes
│   │   ├── ...
│   │   ├── 2022-11-12.md
│   │   ├── 2022-11-13.md
│   │   └── ...
│   ├── monthly-notes
│   │   ├── ...
│   │   ├── 2022-10.md
│   │   ├── 2022-11.md
│   │   └── ...
│   └── dashboard.md
├── staging
│   ├── ...
│   └── ...
├── personal
│   ├── ...
│   └── ...
├── university
│   ├── ...
│   └── ...
└── ...
    ├── ...
    └── ...
```

The `assets` directory basically contains everything in this repository. I would recommend forking the repository, so that you can change or add templates and safely store them. Them simply clone the repo into your vault.

I also added an `attachment` folder. I set it as the `Attatchment folder path` to it and also configured the `Default location to store new attachments`  to store all newly added files there.

The `Folder to create new notes in` is set to the `staging` folder. The `Default location for new notes` also points to this folder. This way I can create notes on the fly and later move them to wherever they need to be. 

### Plugin settings
* `Templater`
	* disable the `Templates` core plugin
	- Set the script folder as your script files folder in `Templater`
	- Enable folder templates and the assign the [daily](./templates/daily-template.md) and [monthly](./templates/monthly-template.md) templates to the corresponding folders (you may want to add `Periodic Notes` in order to properly use monthly notes)
- `Tasks`
	- I personally don't use a `Global task filter`, so you might want to disable this as well in order for everything to work as designed
- `Periodic Notes` _(optional)_
	- enable daily and monthly notes and keep the default formatting (`yyyy-mm-dd` and `yyyy-mm`) and set the templates
- `Dynamic Table of Contents` _(optional)_
	- Set the `Minimum Header Depth` to 0
	- If you decide to not use you probably want to remove the `[[_TOC]]`-Tag from the templates
- `Web` _(optional)_
	- I use the `Web`-plugin to quickly append useful links to my daily notes.
	- install the [Chrome-extension](https://chrome.google.com/webstore/detail/obsidian-web/edoacekkjanmingkbkgjndndibhkegad)
	- chose `PATCH` and set `API URL` to `/periodic/daily`
	- set `HTTP Headers` to `Heading: Resources` (this will append the content below the "Resources" heading in your daily note)
	- set `content` to `- [{{page.title}}]({{page.url}}) {{#if page.selectedText}}{{quote page.selectedText}}{{/if}}`

### Dashboard
Create a dashboard by simply copying the [dashboard-template](./templates/dashboard-template.md) somewhere else into your note and renaming it to `dashboard`.

You can exclude tasks from all `Tasks`-queries by adding filters. This is especially useful if you don't use a global task filter and don't want your dashboard to be cluttered. Here are some examples:
- `filename does not include <filename>`
- `path does not include <path>`
You can also limit the query to only retrieve tasks from designated files or folders:
- `path does include <filename>`
- `path does include <path>`
There are multiple other filters you can use in order to customize your queries. You can learn about them by having a look into the official [Tasks documentation](https://obsidian-tasks-group.github.io/obsidian-tasks/queries/filters/).

## How to use
### Tasks
The centrepiece of my vault is the `Task`-plugin. I track most of my tasks in the corresponding daily notes. There are only a few tasks I track in other files. One example are study plans for which I use dedicated notes. However, as long as you don't schedule for the day a task, it won't show up in your daily notes (even though it will show up in your dashboard). You therefore should adapt the templates if you extensively keep tasks in other notes.

Set the `due date signifier` if the a task has to be done by a specific date.
If you want to track an appointment use the `scheduled date signifier`. Write the time at the beginning of the task, so that your timeline will be sorted correctly:
`- [ ] 06:00-7:30 really important appointment ⏳ 2022-11-03`

I divided my tasks in different categories (e.g. `personal` or `university`). This unclutters my task list and allows me to easily query those tasks. You can use this fore example to generate monthly reports showing you what tasks of a specific category you completed (check out [monthly-work-report-template](./templates/monthly-work-report-template.md)).

### Daily migration
The daily-note's daily migration section will show you all non-completed tasks from the previous day. At the start of each day (or at the end of everyone) go through this section and tick off all completed tasks. Move the remaining tasks to your new note (or migrate them to an even later daily-note) and then tick them off in the old one.

### Dashboard
I have the calendar from the  `Calendar`-plugin open in the right sidebar so that I can switch quickly between daily notes.

Below that I opened and pinned my dashboard-note. That way I always have the most urgent tasks on my screen.

## Support me
If you like my work please consider supporting me by buying me a coffee:

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/senseibonsai)
