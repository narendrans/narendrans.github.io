.fjs-container {
  background-color: white;
  border: solid 1px lightgray;
  display: flex;
  font-size: .9em;
  min-height: 400px;
  overflow: auto;
}

.fjs-container:focus {
  outline:none;
}

.fjs-col {
  border-right: solid 1px lightgray;
  max-height: 600px;
  min-height: inherit;
  min-width: 200px;
  overflow-y: auto;
}

.fjs-item a {
  align-items: flex-end;
  color: #337ab7;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  text-decoration: none;
}

.fjs-item a:focus {
  outline:none;
}

.fjs-item a span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fjs-item a span i {
  padding-right: 5px;
}

.fjs-active a {
  background-color: #DEDEDE;
}

.fjs-col:nth-last-child(2) .fjs-active a,
.fjs-col:last-child .fjs-active a {
  background-color: dodgerblue;
  color: white;
}

.fjs-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.fjs-item-content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fa-folder {
  color: #90E4FF;
}

.fa-file-o {
  color: #A7A7A7;
}

.fa-external-link {
  color: #629EFF;
  font-size: smaller;
}

.fa-caret-right {
  color: gray;
  padding: 0 0 0 .5em;
}

.fjs-col:nth-last-child(2) .fjs-active a .fa-caret-right,
.fjs-col:last-child .fjs-active a .fa-caret-right {
  color: white;
}

.leaf-col {
  align-items: center;
  border-right: 0;
  display: flex;
  flex: 2;
  justify-content: center;
  padding: 0 1.5em;
}

.leaf-row {
  display: flex;
  flex-direction: column;
  font-size: 1.3em;
  text-align: center;
}

.leaf-row .fa {
  color: #A7A7A7;
  font-size: 4em;
  margin: 20px 0;
}

.leaf-row .fa-refresh {
  font-size: 2em;
}

.leaf-col .meta {
  font-size: .7em;
}

.leaf-col .meta strong {
  color: #C1C1C1;
  font-weight: normal;
}

.leaf-col .meta:first-of-type {
  margin-top: 1.5em;
}
