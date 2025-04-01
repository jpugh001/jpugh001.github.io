#include <iostream>
#include <sstream>
#include <string>
#include <cstdlib>
#include <cmath>
#include <ctime>

using namespace std;

// Headers
string toString (double);
int toInt (string);
double toDouble (string);

int main() {
    srand(time(0));   //Seed random number generator
    

    // Jane Pugh
    // CTI-110.2236
    int value;
    int number;

    value = rand() % 9;
    cout << "Guess a value between 0 and 9" << endl;
    cin >> number;
    while (number != value && number != 999) {
        if (number > value) {
            cout << "Too high" << endl;
        } else {
            cout << "Too low" << endl;
        }
        cout << "Guess again" << endl;
        cin >> number;
    }
    if (number == value) {
        cout << "Congrats! You won!" << endl;
    } else {
        cout << "Game Over! Goodbye!" << endl;
    }
    return 0;
}

// The following implements type conversion functions.
string toString (double value) { //int also
    stringstream temp;
    temp << value;
    return temp.str();
}

int toInt (string text) {
    return atoi(text.c_str());
}

double toDouble (string text) {
    return atof(text.c_str());
}
