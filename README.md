# What is a Dojo?

Dojo refers to a training place specifically for Japanese martial arts such as aikido, judo, karate, or samurai. And what does this have to do with programming? Why is it called Programming Dojo? That’s the main point:
You, as a developer, need to train, and a lot!

>In software we do our practicing on the job, and that’s why we make mistakes on the job. We need to find ways of splitting the practice from the profession. We need practice sessions.
>
>\- Dave Thomas

So, **Coding Dojo is a secure, inclusive, collaborative and fun place to improve your programmers skills.**

Following this principles, we really need to know that is not a place to a “SHOW” or a “Competition”, is a lot more than that.
## Coding Dojo Requirements:
- A comfortable meeting room;
- A computer with the desired development environment already up and running;
- A projector so that all participants can see what is being done;
- Snacks and pizza are a plus :-)

## There are two main meeting formats:
### Randori Kata:

In this format, the two initial participants solve the problem together, following TDD and Pair Programming in time-boxed rounds (usually between 5 and 7 minutes). At the end of each turn, the pilot joins the audience, the co-pilot becomes pilot, and a new copilot joins the pair from the audience.

### Prepared Kata:

The session goal is that everyone should be able to reproduce the steps and solve the same problem after the meeting.
In this format, someone has already solved the proposed Kata prior to the meeting (alone or in group) and the solution is presented to the audience during the session. Instead of showing the final code and tests, the presenters start from scratch, explaining each step and allowing the other participants to ask questions or make suggestions.

The sessions usually follow the same process:
#### Problem Choosing (5 to 10 minutes)
Before the meeting, the participants receive an e-mail with 3 to 5 options of problems to be solved. Each option is briefly presented and the participants vote on which problem will be solved.
#### Problem Discussion (10 to 20 minutes)
Once the problem is chosen, the group discusses the different approaches to solving it, usually ending up with an agreed approach and a list of TO-DO items, to guide the pairs during the implementation.
#### Coding Session (1 to 2 hours)
With an agreed approach to solve the problem, the participants start the coding session in one of the two formats — a Prepared Kata or a Randori. They should practice Pair Programming and Test-Driven Development as a general rule.
#### Retrospective (10 to 20 minutes)
At the end of the session, the participants stop coding (even if the problem was not completely solved) to reflect on the experience and share the learned lessons with the group (and also can send the code to be versioned in GitHub or Bitbucket).

**Benefits:**
Each programmer will see a particular benefit, so I will list the most common:
Better communication:

## Pair programming with some pressure
We are in a secure and fun place to help each other, so, we’ll lose the shame and our communication will be improved a lot, besides losing the fear of making mistakes in public. And the pilot is never alone, the co-pilot is there to help in each step and if something goes wrong the “Sensei” (usually the creator of that session) will help to unblock.

## Solving kata's
### 1. Choose a problem to solve 
The code katas can be found in `katas/[PROBLEMNAME]`
### 2. Branch it 
Create a new branch and append `-solution` i.e. `katas/[PROBLEMNAME]-solution`
### 3. Solve it 
Follow the coding dojo format of your choosing. Commit every babystep.
### 4. Push it
Push it to a remote repo of your choosing and enjoy a job well done!

## TDD - Test-Driven Development:
Test-Driven Development is a way of working, or a process for writing code. Your work is paced in BabySteps and your progress is assured by frequently writing and running automated tests. Coding proceeds in an extremely focused and productive rhythm.

Tests are made before the implementation, following these steps:
1. Write a test for a new function. The test should fail;
2. Write code until the test passes;
3. Refactor until the code is suitable; for continued development
4. Go to 1.

## Baby steps

The next step to take should always be as small as possible.
> \- Yes, as small as possible.

If we proceed in very small steps, chances are that we can keep the next step trivial. BabySteps combined with [RhythmOfTestFirst](http://codingdojo.org/RhythmOfTestFirst/) really boosts productivity.

## RhythmOfTestFirst

- Write UT for Particular BabyStep
- Run it, it should fail
- If it is not failing - review the test it might be wrong
- Written test should generate an interface
- Write an implementation until the test is green
- Go to the next BabyStep

Sources:
- [Coding Dojo🥋](https://medium.com/@lucascaixeta/coding-dojo-4e0b1ea69735)
- [codingdojo.org](http://codingdojo.org)
- [Muses Coding Dojo](https://github.com/muses-code-js/coding-dojo)
- [r/dailyprogrammer](https://www.reddit.com/r/dailyprogrammer)
