const inquirer = require('inquirer');

// Create the prompt function for v9+
const prompt = inquirer.createPromptModule();

async function main() {
  try {
    const answers = await prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'number',
        name: 'age',
        message: 'How old are you?',
      },
      {
        type: 'confirm',
        name: 'likesCoding',
        message: 'Do you enjoy coding?',
        default: true,
      },
      {
        type: 'list',
        name: 'favoriteLanguage',
        message: 'What is your favorite programming language?',
        choices: ['JavaScript', 'Python', 'Java', 'C++', 'Other'],
      },
      {
        type: 'checkbox',
        name: 'hobbies',
        message: 'What are your hobbies?',
        choices: ['Reading', 'Gaming', 'Cooking', 'Traveling', 'Sports'],
      },
      {
        type: 'password',
        name: 'password',
        message: 'Set a password:',
        mask: '*',
      },
      {
        type: 'rawlist',
        name: 'os',
        message: 'What operating system do you use?',
        choices: ['Windows', 'macOS', 'Linux'],
      },
      {
        type: 'editor',
        name: 'bio',
        message: 'Write a short bio:',
      },
    ]);

    console.log('\nYour responses:');
    console.log(JSON.stringify(answers, null, 2));
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
