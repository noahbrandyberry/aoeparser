# aoeparser
You can import data from buildorderguide.com by following the steps below:

* Open https://buildorderguide.com in any browser
* Open the inspector and go to the network tab.
* View only XHR request and reload the page.
* Find the largest request (one of the ones named `channel`) and download it
  * It is ~15mb of data so it will take a bit
  * Name the downloaded file `input`
* Place the file in the root of this repo
* Run `yarn start` and you'll have the formatted json!
