<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="/user" method="post">
        @csrf
        <div class="form-group">
            <input type="text" class="from-control" name="firstname">
        </div>
        </br>
        <select name="status" id="">
            <option value="1">Admin</option>
            <option value="0">Membre</option>
        </select>
        <div class="form-group">
            <button class="btn btn-success">Ajouter</button>
        </div>
    </form>
    <h1>liste des utilisateurs de la base de donnee</h1>
    @foreach($user as $usr)
            <li>{{$usr->firstname}}</li>
            <li>{{$usr->lastname}}</li>
            <li>{{$usr->email}}</li>
            <li>{{$usr->phone}}</li>
            <li>{{$usr->login}}</li>
            <li>{{$usr->status}}</li>
            
        @endforeach
</body>
</html>