<?php
// GitHub webhook deployment handler
// Configure this webhook in GitHub: Settings → Webhooks → Add webhook
// Payload URL: https://yourdomain.com/deploy.php
// Content type: application/json
// Secret: (same value as WEBHOOK_SECRET below)

define('WEBHOOK_SECRET', 'MyDeploy2026!');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

// Verify GitHub signature header is present
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';
if (empty($signature)) {
    http_response_code(400);
    exit('Missing signature');
}

// Read raw payload
$payload = file_get_contents('php://input');
if ($payload === false) {
    http_response_code(400);
    exit('Could not read payload');
}

// Compute expected HMAC SHA256 signature
$expected = 'sha256=' . hash_hmac('sha256', $payload, WEBHOOK_SECRET);

// Constant-time comparison to prevent timing attacks
if (!hash_equals($expected, $signature)) {
    http_response_code(401);
    exit('Invalid signature');
}

// Only act on push events
$event = $_SERVER['HTTP_X_GITHUB_EVENT'] ?? '';
if ($event !== 'push') {
    http_response_code(200);
    exit('Ignored event: ' . htmlspecialchars($event));
}

// Run git pull
$output = shell_exec('cd ' . escapeshellarg(__DIR__) . ' && git pull 2>&1');

http_response_code(200);
header('Content-Type: text/plain');
echo "Deploy triggered.\n\n" . $output;
