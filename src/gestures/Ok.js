import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe thumbs up gesture 👌
const okDescription = new GestureDescription('ok');

// thumb:
// - half curled
// - vertical up (best) or diagonal up left / right
okDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
okDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
okDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
okDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);

// index:
// - half curled
// - vertical down (best) or diagonal up left / right
okDescription.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
okDescription.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
okDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.25);
okDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.25);

// all other fingers:
// - vertical
// - horizontal left or right
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  okDescription.addCurl(finger, FingerCurl.NoCurl, 1.0);
  okDescription.addDirection(finger, FingerDirection.VertialUp, 1.0);
  okDescription.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

export default okDescription;
