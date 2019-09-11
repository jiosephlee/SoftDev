#include <stdio.h>

int problem1 (int bound){
    int sum = 0;
    int x;
    for (x = 0; x < bound; x++){
        if(x%3 == 0 || x%5 == 0){
            sum += x;
        }
    }
    return sum;
}

int problem5(){

}
int main(){
    printf("Problem 1: %d \nProblem 2: %d \n", problem1(1000), problem5());
}
