# UdaciCards Project

## Introduction
UdaciCards is an Android App which can be used to make virtual flashcard decks for studying and self learning.

## Platform
This app has been tested to work correctly on an Android device using the Expo app.

## More Details
When a user opens the app, they will be greated by a list of various decks the user has created or an empty list the first time they open the app. When there are decks present, each deck button displays the title of the deck and how many cards are present in the deck. The user can create new decks by swiping left or tapping on the 'ADD NEW DECK' tab on the top of the view. Enter anything in the title field of the 'ADD NEW DECK' view and a 'Create New Deck' button will appear which shall allow the user to create a new deck.

Selecting a deck on the 'DECK LIST' view or creating a new deck on the 'ADD NEW DECK' View shall bring the user to the Deck View of the selected or newly created deck. In the Deck View page, the user can see the title of the deck, how many cards are in it, start a quiz from the deck, or add a new card to the deck. If no cards are present in the deck, the user will find that the button to start a quiz reads 'Add cards to the deck first'. So when no cards are present, select 'Add Card' to go to the 'New Question' view for the particular deck which shall provide a Question and Answer field which both require filling in order to select the 'Create New Question' button. Select 'Create New Question' to be brought back to the deck view and now the 'Start Quiz' button shall be selectable. Select 'Start Quiz' to start the quiz for the deck.

The Quiz View shall first display the number of questions remaining, the Question, and a button to show the answer to the question. Like a flashcard, it is up to the user to tell if they got the answer right or not. Select 'Show Answer' to view the answer that was created for the question. The answer shall appear, as well as two buttons to let UdaciCards know if the user got the answer correct or incorrect. After selecting correct or incorrect, the questions remaining shall decrement by one and the user shall be greated with either the next question or the results screen. Note, when taking the quiz, questions and corresponding answers shall appear in the order in which their corresponding cards were created. The results screen shall display what percentage of the questions the user got correct as well as two options: restart quiz or go back to the corresponding deck view. Selecting 'Restart Quiz' shall take the user to the very beginning of the quiz and the 'Back to Deck' shall take the user back to the 'Deck View' to add more cards or browse to a different deck.

Some other things to note about the app is that the user has the ability to allow the app to provide daily reminders to take at least one quiz. When a quiz has been taken, this reminder shall be delayed until the next day. In addition, in most screens, the user can go back to view the previous screen by either pressing the back button or selecting an arrow that appears on the top left corner.

## Installation
1. Open up a command window and navigate to the directory you wish to install UdaciCards on your machine (the command should be '*cd \<directory\>*' where *\<directory\>* is your desired directory).
2. Run the command '*git clone https://github.com/awthomps/UdaciCards.git*' and after a moment, the project shall download and should say 'done.'
3. After the project has been 'cloned', change directories to the project file 'UdaciCards' by entering the following command in your command window: '*cd UdaciCards*'
4. Now you may proceed to start installing the necessary dependencies for the project. Please enter the following command to install: '*yarn install*' or '*npm install*'. This may take some time.

## Running UdaciCards:
1. If you already have a command window up from the installation, you should be set. Otherwise, open up a command window and navigate to where you ran '*yarn install*' or '*npm install*'
2. Run the command: '*yarn start*' or '*npm start*'
3. After a while, you should see the text 'Packager started!' a QR code, and some other information such as where the app is currently being hosted as well as 5 different options.
4. For better performance, you may go ahead and select the 'd' option to turn off development mode in the command window but you should be fine to use the app regardless.
5. Select the best option for you to deliver the app to your Android device which should have the 'Expo App' installed.
6. Since Expo does not seem to allow you to change which network device is hosting the app (ethernet, wifi, etc...), this developer recommendeds that the user generates a new QR code using the following string: '*exp://local-ip-address:19000*' where *local-ip-address* is the local ip address corresponding to the current active network hardware device on the user's computer.
7. Now that you definitely have the correct ip address because you either only have one network device and got a little lucky, or have generated a QR code with the correct network device (hint: use the command 'ipconfig' in a different command window.), open up the app using the Expo app on your Android device. Your Android device MUST be on the same network as the computer hosting the Android App.
8. After a short Expo app splash screen, the main page of the UdaciCards app should now be displayed in your Android phone.
9. Congratulations! You have installed UdaciCards! Now get studing for that next big test, or maybe a new language!