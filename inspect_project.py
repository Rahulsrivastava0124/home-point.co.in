import json

try:
    with open('projects.json', 'r') as f:
        data = json.load(f)
    
    if data and len(data) > 0:
        project = data[0]
        print(json.dumps(project, indent=2))
        
        # Search for "zone" key
        def find_key(obj, key):
            if isinstance(obj, dict):
                for k, v in obj.items():
                    if key.lower() in k.lower():
                        print(f"Found key '{k}': {v}")
                    find_key(v, key)
            elif isinstance(obj, list):
                for item in obj:
                    find_key(item, key)
        
        print("\nSearching for 'zone'...")
        find_key(project, "zone")
    else:
        print("No data found")
except Exception as e:
    print(f"Error: {e}")
