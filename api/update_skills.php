<?php
session_start();
if (!isset($_SESSION['loggedin'])) {
    header("Location: login.php");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $skills = json_decode(file_get_contents('skills.json'), true);
    foreach ($skills as $key => $value) {
        if (isset($_POST[$key])) {
            $skills[$key] = (int)$_POST[$key];
        }
    }
    file_put_contents('skills.json', json_encode($skills));
    $success = "Skills updated successfully!";
}
$skills = json_decode(file_get_contents('skills.json'), true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Update Skills</title>
</head>
<body>
    <h2>Update Skill Levels</h2>
    <form method="post" action="">
        <?php foreach ($skills as $key => $value): ?>
            <label><?php echo ucfirst($key); ?>:</label>
            <select name="<?php echo $key; ?>">
                <?php for ($i = 1; $i <= 5; $i++): ?>
                    <option value="<?php echo $i; ?>" <?php if ($i == $value) echo 'selected'; ?>><?php echo $i; ?></option>
                <?php endfor; ?>
            </select><br>
        <?php endforeach; ?>
        <button type="submit">Update Skills</button>
    </form>
    <?php if (isset($success)) echo "<p style='color:green;'>$success</p>"; ?>
</body>
</html>
