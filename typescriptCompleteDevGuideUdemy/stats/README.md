Goal of this project 
* Load a CSV file with the node standard library
* Parse that data
* Analyze that data
* Report back

MatchResult.ts - shows an example of Enum.
MatchData.ts - shows an example of a Tuple.
inheritance/CsvFileReader.bak - shows an example of a Generic / abstract class that are often used in inheritance.
MatchReader.ts - shows an example of composition style coding, where DataReader is used as a type in the constructor of MatchReader. MatchReader only worried about providing implementation, not the data itself.
Summary.ts - more examples of composition where Analyzer and OutputTarget are referred to and run/print functions of those are what are implemented, not a function on Summary itself. 

Enum
- just a way for developers to group elements with a similar trait for clarity.

Tuple
- an ordered array, where there is no key, so the structure is important. 

Generic Classes
- often shown as just a "T", they are a function for types, where the type is decided at a later point. 
