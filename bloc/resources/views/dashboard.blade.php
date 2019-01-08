@extends('app')
@section('content')
<div class="row">
    <div class="col-12">Lista de tareas</div>
    <a class="btn btn-primary pull-right" data-toggle="modal" data-target="#create">Añadir tarea</a>
    <table class="table table-hover">
        <thead>
            <th>id</th>
            <th>Tarea</th>
            <th colspan="2"></th>
        </thead>
        <tbody>
            <tr v-for="keep in keeps" :key="keep.id">
            <td>@{{ keep.id }}</td>
            <td>@{{ keep.keep }}</td>
                <td>
                    <a href="" class="btn btn-warning">Editar</a>
                    <a href="" class="btn btn-danger" v-on:click.prevent="deleteKeeps(keep)">Eliminar</a>
                </td>
            </tr>
        </tbody>
    </table>
  @include('create')
</div>
@endsection