(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{486:function(e,t,a){"use strict";a.r(t);var n=a(2),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"week-12-day-4-daily-journal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#week-12-day-4-daily-journal"}},[e._v("#")]),e._v(" Week 12 | Day 4 Daily Journal")]),e._v(" "),a("h2",{attrs:{id:"final-checkpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final-checkpoint"}},[e._v("#")]),e._v(" "),a("em",[e._v("Final Checkpoint")])]),e._v(" "),a("p",[e._v("My goal for today was to get my server done (just have vault keeps left) by noon. I got some help and guidance from Mark and my server was done by 10:30a! I could now focus on my front end.")]),e._v(" "),a("p",[e._v("I hit a couple small snags today.")]),e._v(" "),a("ol",[a("li",[e._v("My default vault img was overwriting what the user inputted in the client. I took the default off my table. I included the default on my vault model and made sure the img property was being passed in the create sql statement.")]),e._v(" "),a("li",[e._v("Getting a user's vaults: my filter was working too well and wasn't showing a user their public AND private vaults. I had to dip back into the server and rethink my logic on this. This is the method I was stuck on on Wednesday and now it seems ridiculously simple. In service, if the user is null, they're not signed in and should only be able to view a profile's public vaults. In my vault service, I returned vaults.ToList().FindAll(v => v.IsPrivate == false). Otherwise, return all vaults. Then in repository, my sql statement further filters WHERE creator.id = profile.id so that if a user is authenticated but NOT the creator, they too will only get the public vaults on that profile page.")])]),e._v(" "),a("p",[e._v("When I got home, I worked on creating vaultkeeps and rendering them to the client. GREAT day! Very tired!")])])}),[],!1,null,null,null);t.default=s.exports}}]);