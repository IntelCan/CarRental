Aby uruchomić program potrzebne będzie:
1. Baza PostgreSQL:
   Zakładamy użytkownika o danych:
   login: carr
   hasło: carr
   
   oraz założyć schemat bazy danych o nazwie CarRental
   
2. Może być potrzebny także plugin do biblioteki lombok ponieważ może wystąpić błąd 
  przy kompilacji ( nie sprawdzałem ).
   
3. Jak już mamy baze i plugin, musimy zbudować projekt. W tym celu w terminalu wpisujemy komende:
  gradle build

Podstawa FE wzorowana na innym projekcie z githuba:

https://github.com/borysn/spring-boot-angular2/wiki

