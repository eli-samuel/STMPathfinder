## STMPathfinder

## Inspiration

Sleep is important to me and having that extra minute or two because I know where I get off and on the metro to get to my destination makes a difference.

Also being on time is important, and having this extra edge in times when you might be late...might make you not late.

## What it does

This algorithm tells you which door to stand at your departure metro station so that you'll end up as close as possible to the exit of your destination metro station.

## How we built it

We used the Djiksatras pathfinding algorithm to find the optimal route between metro stations. We then calculated which door to enter the metro on based on if or if not there is a connection metro (eg. Lionel Groulx, Jean-Talon, etc). We use a lot of data analysis to enhance the efficiency of the transit of users.

We are also excited to possibly turn this into an API in the future.

We also would love to add bus and train lines coming from the metro stations so users can use this algorithm to know which exit they should leave from to catch a certain bus.

## Challenges we faced

We couldn't actually find data concerning where all the metro entrances and exits are located, so we made data up to show that it works. Were this project to be taken further, we'd like to travel to every station and mark the doors. In the future with lots of polish as well, we'd like to perhaps work with major transit companies around Montreal to help commuters get to work faster.

