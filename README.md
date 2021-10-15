# 05 Third-Party APIs: Work Day Scheduler

https://github.com/iNanzo/NMH_BCHW5

https://inanzo.github.io/NMH_BCHW5/

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## My Task

I first looked over the HTML and CSS files to see what APIs and classes/id's i'd be working with. I set up the momentjs dates and dom selectors first. From there I made a pageStart function that had a for loop that ran functions that would generate, then fill the timeblocks. The timeblockGen function was simple enough thanks to the way I challenged myself on the week 4 homework. I made tags and added their classes and ids, then appended them to the page. Most of the time spent was figuring out which classes to give them from both the CSS and APIs. I noticed the HTML page was linked to font awesome and found the same save icon used in the example so I googled how to get it on the button with an <i> tag.

After that, I worked on the save function, on click the button grabs the id of it's parent and text value of it's sibling. It then stores that value in localStorage using the id as a variable name. I added an alert as fluff to let the user know what they saved. Lastly, I load the value of the textarea with the timeblockLoad function according to what i is in the for loop. This function turned out much simpler than I thought it would be. As side notes, I had to add 9 to the i value of the for loop to get the proper hours, and I had to add the button EventListener after running pageStart's for loop. It was originally in the timeblockGen function, adding the EventListener after appending the button, but this made an EventListener for every time the for loop ran; so I eventually did the aforementioned solution so it only ran once.