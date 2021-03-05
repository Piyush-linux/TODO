#include <iostream>
using namespace std;

class Student{
private:
  string name;
public:
  void getName();
  void show();
};

void Student::getName(){
  cout<<"Enter Your name :"<<endl;
  cin>>name;
};

void Student::show(){
  cout<<"Name :"<<name<<endl;
};

int main(){
  Student s1;
  s1.getName();
  s1.show();
  cout<<"Hello"<<endl;
  return 0;
}
