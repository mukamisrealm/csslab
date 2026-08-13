<?php require_once "db.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Chapchap Pay - Contributions</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1 align="center">⚡ Chapchap Pay System</h1>
        <p align="center">Member Contributions Ledger</p>
        
        <nav>
    <a href="index.php">Home</a>
    <a href="contributions.php">Member Contributions</a>
    <a href="register.php">Join & Loans</a>
    <a href="gallery.php">Gallery</a>
</nav>
    </header>

    <main>
        
        <div class="login-card">
            <h3>💳 Record a Contribution</h3>
            <form action="process.php" method="POST">
                <p>
                    <label for="member_id">Member ID:</label><br>
                    <input type="text" id="member_id" name="member_id" placeholder="e.g. CC-012" required>
                </p>
                <p>
                    <label for="member_name">Full Name:</label><br>
                    <input type="text" id="member_name" name="member_name" placeholder="e.g. Jane Mwangi" required>
                </p>
                <p>
                    <label for="amount">Amount (KES):</label><br>
                    <input type="number" id="amount" name="amount" placeholder="e.g. 3000" required>
                </p>
                <input type="submit" value="Submit Contribution">
            </form>
        </div>

        <h2>This Month's Ledger</h2>
        <p>All payments must be sent via M-Pesa by the 5th of the month.</p>
        
        <table class="ledger-table">
            <thead>
                <tr>
                    <th>Member ID</th>
                    <th>Name</th>
                    <th>Amount Sent (KES)</th>
                    <th>Date Recorded</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $query = "SELECT * FROM contributions ORDER BY submission_date DESC";
                $result = mysqli_query($conn, $query);

                if ($result && mysqli_num_rows($result) > 0) {
                    while ($row = mysqli_fetch_assoc($result)) {
                        echo "<tr>";
                        echo "<td>" . htmlspecialchars($row['member_id']) . "</td>";
                        echo "<td>" . htmlspecialchars($row['member_name']) . "</td>";
                        echo "<td>" . number_format($row['amount'], 2) . "</td>";
                        echo "<td>" . htmlspecialchars($row['submission_date']) . "</td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='4'>No contribution records found in database.</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </main>

    <footer>
        <p>&copy; 2026 Chapchap Pay System. Designed for Web Development Submission.</p>
    </footer>
    <script src="script.js"></script>

</body>
</html>