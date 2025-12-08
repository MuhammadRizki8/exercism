// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
// Size class
class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

// Position class
class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

// ProgramWindow class
class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();        // default 80×60
    this.position = new Position(); // default 0,0
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    this.size.width = Math.min(Math.max(1, newSize.width), maxWidth);
    this.size.height = Math.min(Math.max(1, newSize.height), maxHeight);
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    this.position.x = Math.min(Math.max(0, newPosition.x), maxX);
    this.position.y = Math.min(Math.max(0, newPosition.y), maxY);
  }
}

// changeWindow function
function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}


export { Size, Position, ProgramWindow, changeWindow };
