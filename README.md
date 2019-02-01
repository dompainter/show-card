## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### APPROACH

I have created a show case containing an active show hero along with a list of shows below.
The reason for this approach is that a show card is likely to have some interaction elements on a site,
be that to take a user to find out more information about the show or to activate that show in a player.
Therefore, rather than creating a single card, demonstrate the re-usability of components to render multiple
show cards.
Utilising FlexBox allows for a responsive solution that expands items and stacks shows when viewed in a smaller viewport.
Tested using Enzyme and Jest.
Created with create-react-app as a starter.

### WITH MORE TIME

- Display further information in hero container for the currently selected show.
- Potential for a carousel with more shows in thw show list
- Add more info to shows and display in the show hero, such as next showing, description and episodes.

### ASSUMPTIONS

- Images being used are Files within the codebase and not URLs
- Images have been treated already and are the same size / crop
- All shows have a channel
