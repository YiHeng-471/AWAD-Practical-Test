<form action="addParticipant" method="POST">
    @csrf
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"placeholder="Name" required><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Email" required><br><br>
    <label for="email">Password:</label>
    <input type="password" id="password" name="password" placeholder="Password" required><br><br>
    <button type="submit">Add Participant</button>
</form>