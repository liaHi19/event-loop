// node myFile.js
const pendingTimers = [];
const pendingTasks = [];
const pendingOperations = [];

//New timers, operations are recorded from myFile running
myFile.runContext();

const shouldContinue = () => {
  // Check: any pending setTimeOut, setInterval, setImmediate
  // Check: any pending os tasks(like listening to port)
  // Check: any pending long-running operations(like fs modules)

  return pendingTimers || pendingTasks || pendingOperations;
};

//entire body executes in one 'tick'
while (shouldContinue()) {
  // 1. Node looks at pendingTimers and sees if any functions are ready to be called. (setTimeout, setInterval)
  // 2. Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
  // 3. Pause execution. Continue when ...
  // -a new pendingOSTask is done
  // -a new pendingOperation is done
  // -a timer is about to complete
  // 4. Looks at pendingTimers. Call any setImmediate
  // 5. Handle any 'close' events
}

//exit back to terminal
