# dog-incident-map
A webapp to mark the location, reason and picture of a dog incident for the safety and knowledge of other outdoor recreation users. 

## Incident components/Ideas

- [ ] Upvote
- [ ] Downvote
- [ ] Report
- [ ] Number of dogs
- [ ] Severity by user
- [ ] Severity by algorithm
- [ ] Type (bite, chase, aggressive bark, dangerous owner)

## TODO

- [ ] Redirect from report to zoom onto the incident.
- [x] Fix so that when the user clicks on an existing incident it shows the incident info not the "report incident" - fixed by creating an arry of existing popups and if the user clicks on that location just open the popup.
- [x] Fix the fact that only one title is used? - had to do with creating a new `L.popup()` object on each function call. 
- [ ] Create reusable report component, where users can upvote, downvote and report or comment on mapped incidents.
- [x] Render items in the database to the map. - fairly tough, used item
- [x] Report an incident button.
- [ ] Figure out how to protect the thunderfrost api key so I can use their map tiles.
- [x] Rename project from bad-dog-map to dog-incident-map to be less abrasive.
- [ ] Add "anonymous" user ID https://stackoverflow.com/questions/3940179/detecting-a-unique-anonymous-user

## Resources/Fun sites I've found working on this project

* https://github.com/komoot/leaflet.photon - photon is an alternative to Nominatim search and has a pre-made Leaflet JS plugin
* https://fonts.google.com/icons 
* https://developer.mozilla.org/en-US/docs/Web
* https://github.com/mourner
* https://www.gravitystorm.co.uk/
* https://www.thunderforest.com/about/
* https://stadiamaps.com/explore-the-map
* https://stackoverflow.com/questions/8408046/how-to-change-the-name-of-a-django-app
* https://github.com/CliffCloud/Leaflet.EasyButton/blob/master/src/easy-button.js
* https://stackoverflow.com/questions/49372018/adding-clickable-button-to-leaflet-map
* https://web.archive.org/web/20191218192541/http://www.coffeegnome.net/control-button-leaflet/
* https://leafletjs.com/examples/quick-start/
* https://stackoverflow.com/questions/16790375/django-object-is-not-json-serializable
* https://adamj.eu/tech/2022/10/06/how-to-safely-pass-data-to-javascript-in-a-django-template/
* https://adamj.eu/
* https://stackoverflow.com/questions/42494823/json-parse-returns-string-instead-of-object