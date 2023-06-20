//Задача №1

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
      }
    
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    
      return true;
    }

//Задача №2

function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(function(user) {
        return user.gender === gender;
    });
    
    const ages = filteredUsers.map(function(user) {
        return user.age;
    });
    
    const sum = ages.reduce(function(total, age) {
        return total + age;
    }, 0);
    
    const averageValue = sum / ages.length;
    
    if (isNaN(averageValue)) {
        return 0;
    } else {
        return averageValue;
    }
}