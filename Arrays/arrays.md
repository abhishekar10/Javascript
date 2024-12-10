<h1 align="center">Arrays</h1>
<ol>
<li>Arrays in JS can store multiple data types (whaaaat??!?!?)</li>
<li>Oh wait, they are objects as well.
So if use something like myArr[var] where var is not a non-negative value, the var is a key for the value???
myArr[-1] = 1 doesn't mean the last value of the array is 1, but a key value pair -1: 1.</li>
<li>Length method in javascript arrays usually is O(1) as </li>
 </ol>
<p>
    <ul>
        <li><b>Empty values</b> in arrays are non-initialised values. For example, the following array
        `let myArray = [1,2,,5]` has two empty values in the middle. These are not of null or undefined types, but are retuned as undefined values when included under iterations such as for...of
        </li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array">Array Constructor</a>
        </li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from">from() method</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of">of() method</a></li>
    </ul>
</p>