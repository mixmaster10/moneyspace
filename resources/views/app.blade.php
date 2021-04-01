
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>{{ config('app.name', 'Laravel') }}</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="application-name" content="{{ config('app.name', 'Laravel') }}">

    <meta name="apple-mobile-web-app-title" content="{{ config('app.name', 'Laravel') }}">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">

    <link rel="shortcut icon" href="{{ url('favicon.ico') }}">
    <link rel="stylesheet" href="{{ url('fonts/stylesheet.css') }}">
    <link rel="stylesheet" href="{{ url('fonts/icomoon/style.css') }}">
    <link rel="stylesheet" href="{{ url('css/jquery-ui.css') }}">
    <link rel="stylesheet" href="{{ url('css/modal.css') }}">
    <link rel="stylesheet" href="{{ url('css/jquery.mCustomScrollbar.css') }}">
    <link rel="stylesheet" href="{{ url('css/animate.css') }}">
    <link rel="stylesheet" href="{{ url('css/style.css') }}">
    <link rel="stylesheet" href="{{ url('css/app.css') }}">

    <base href="{{ url('/') }}">
</head>
<body>
    <div id="app">
        <div id="vue-loading">{{ __('strings.loading') }}...</div>
    </div>

    <script>
      var baseUrl = '{{ url('/api') }}';
    </script>
    <script src="{{ url('js/jquery-3.3.1.js') }}"></script>
    <script src="{{ url('js/jquery-ui.js') }}"></script>
    <script src="{{ url('js/modal.js') }}"></script>
    <script src="{{ url('js/jquery.mCustomScrollbar.js') }}"></script>
    <script src="{{ url('js/jquery.mousewheel.js') }}"></script>
    <script src="{{ url('js/jquery.mask.min.js') }}"></script>
    <script src="{{ url('js/wow.min.js') }}"></script>
    <script src="{{ url('js/script.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
