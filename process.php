<?php
require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Safely capture inputs from either contributions.php or register.php
    $raw_member_id   = $_POST['member_id'] ?? $_POST['phoneNumber'] ?? '';
    $raw_member_name = $_POST['member_name'] ?? $_POST['fullName'] ?? '';
    $raw_amount      = $_POST['amount'] ?? $_POST['loanAmount'] ?? 0;

    // Sanitize data against SQL injection
    $member_id   = mysqli_real_escape_string($conn, trim($raw_member_id));
    $member_name = mysqli_real_escape_string($conn, trim($raw_member_name));
    $amount      = mysqli_real_escape_string($conn, trim($raw_amount));

    // Ensure amount defaults to numeric value
    if (empty($amount) || !is_numeric($amount)) {
        $amount = 0;
    }

    // Backend validation check
    if (!empty($member_id) && !empty($member_name)) {
        
        $sql = "INSERT INTO contributions (member_id, member_name, amount) 
                VALUES ('$member_id', '$member_name', '$amount')";
        
        if (mysqli_query($conn, $sql)) {
            // Redirect back to ledger page upon successful insert
            header("Location: contributions.php?status=success");
            exit();
        } else {
            echo "Database Error: " . mysqli_error($conn);
        }
    } else {
        echo "<p style='color: red; text-align: center; font-weight: bold;'>⚠️ Please complete all required fields.</p>";
    }
} else {
    // Prevent direct script access via GET request
    header("Location: index.php");
    exit();
}
?>