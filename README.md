# poc-vue-microfrontends

```
    cd ./micro-a
    npm i
    npm run serve
```

```
    cd ../main-app
    npm i
    npm run serve
```

Go to http://localhost:8080/. \
And navigate to "Micro A". \
The view seen is a vue microfrontend loaded asynchronously. \
Shares dependencies but not a Vue instance.
