let userBirthYear = prompt('Please enter your year of birth:');
if (userBirthYear) {
  let userCity = prompt('What city do you live in: ');
  if (userCity) {
    let userFavoriteSport = prompt('What is your favourite sport: ');
    if (userFavoriteSport) {
      let age = new Date().getFullYear() - userBirthYear;
      let toUserMessage = `Your age: ${age}\n`;
      if (userCity === 'Kyiv' || userCity === 'Washington' || userCity === 'London' || userCity === 'Warsaw' || userCity === 'Bern' || userCity === 'Amsterdam' || userCity === 'Berlin' || userCity === 'Tbilisi' || userCity === 'Rome') // Если один из или написал юзер, выполняется команданда для столиц
       {
        toUserMessage += `You live in a capital city ${userCity}, of country ${userCountry(userCity)}\n`; // Для столичных :D
      } else { 
        toUserMessage += `You live in ${userCity}\n`; // Для обычных смертных :D
      }
      // Массив для любимой игры
      let bestPlayers = [ 
        ['volleyball', 'Karch Kiraly'],
        ['tennis', 'Novak Djokovic'],
        ['football', 'Lionel Messi']
      ];
      // Проверка любимой игры на наличие в массиве, если есть - выполняется команда
      let currBestPlayer = false;
      for (let i = 0; i < bestPlayers.length; i++) {
        if (userFavoriteSport === bestPlayers[i][0]) {
          toUserMessage += `Cool! Do you wanna be like ${bestPlayers[i][1]}?`;
          currBestPlayer = true;
          break;
        }
      }
      if (!currBestPlayer) {
        toUserMessage += `Your favorite sport ${userFavoriteSport}`; // Если в списке игры нет
      }
      alert(toUserMessage);
    } else {
      alert('It is a pity that you did not want to enter yourfavorite sport!'); // Если пользователь закрыл окно...
    }
  } else {
    alert('It is a pity that you did not want to enter your city!'); // Если пользователь закрыл окно...
  }
} else {
  alert('It is a pity that you did not want to enter your year of birth!'); // Если пользователь закрыл окно...
}

// Выбираем страну и готово
function userCountry(userCity) {
  switch (userCity) {
    case 'Kyiv':
        return 'Ukraine';
    case 'Washington':
        return 'USA';
    case 'London':
        return 'The Great Britain';
    case 'Warsaw':
        return 'Poland';
    case 'Bern':
        return 'Switzerland';
    case 'Amsterdam':
        return 'Netherlands';
    case 'Berlin':
        return 'Germany';
    case 'Tbilisi':
        return 'Georgia';
    case 'Rome':
        return 'Italy';
    default:
      return '';
  }
}

