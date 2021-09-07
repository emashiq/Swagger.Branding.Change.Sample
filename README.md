# Swagger.Branding.Change.Sample

## Active Static content use which will enable wwwroot

## Startup.cs
```csharp
app.UseStaticFiles();
```

```csharp
app.UseSwaggerUI(c => {
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "OTPZone v1");
    c.InjectStylesheet("/swagger-content/custom.css");
    c.InjectJavascript("/swagger-content/custom.js", "text/javascript");
    c.RoutePrefix = string.Empty;
});
```
### custom.css
```css
.swagger-ui .topbar {
    background: #4267B2;
}
```
### custom.js
```javascript
(function () {
    window.addEventListener("load", function () {
        setTimeout(function () {
            var logo = document.getElementsByClassName('link'); //For Changing The Link On The Logo Image
            logo[0].href = "https://otpzone.com";
            logo[0].target = "_blank";
            logo[0].children[0].alt = "OTPZone_API";
            logo[0].children[0].src = '/swagger-content/logo.png';
            var body = document.getElementsByName('body');
            console.log(body);
        });
    });
})();
```


